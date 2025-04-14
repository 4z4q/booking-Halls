import { notFound } from "next/navigation";

import { allowedCategories, services } from "@/constants/services-data";
import { ProductsFilter } from "@/components/products-filter";
export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;

  // Format the category name for display (capitalize first letter)
  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `${formattedCategory} - خدمات المناسبات`,
    description: `تصفح خدمات ${formattedCategory} لمناسباتك الخاصة`,
  };
}

export default async function HallsPage({
  params,
}: {
  params: { category: string };
}) {
  // Extract the category parameter
  const { category } = await params;

  // Check if this is a valid category
  const isValidCategory = allowedCategories.some(
    (cat) => cat.category === category
  );

  if (!isValidCategory) {
    notFound();
  }

  // Filter services by the category
  const filteredServices = services.filter(
    (service) => service.type === category
  );

  // If no services match the category, show 404
  if (filteredServices.length === 0) {
    notFound();
  }

  // Get the Arabic category name
  const getCategoryNameInArabic = (category: string) => {
    switch (category) {
      case "halls":
        return "القاعات";
      case "decor":
        return "الديكور";
      case "artists":
        return "الفنانين";
      case "clothing":
        return "الأزياء";
      case "photography":
        return "التصوير";
      default:
        return category;
    }
  };

  const arabicCategoryName = getCategoryNameInArabic(category);

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-6 md:py-8">
        {/* Page Header */}
        <div className="mb-8 text-right">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            {arabicCategoryName}
          </h1>
          <p className="mt-2 text-muted-foreground">
            اختر من بين أفضل خدمات {arabicCategoryName} لمناسبتك الخاصة
          </p>
        </div>

        {/* Filters and Search */}

        <ProductsFilter
          filteredServices={filteredServices}
          arabicCategoryName={arabicCategoryName}
          category={category}
        />
      </div>
    </div>
  );
}
