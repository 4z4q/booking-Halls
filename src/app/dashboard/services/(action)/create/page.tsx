"use client";
import ServiceForm from "@/components/dashboard-components/services-component/form";
import { emptyService } from "@/constants/defaultValues";
import { serviceSchema } from "@/lib/validation";

const CreatePage = () => {
  return (
    <div>
      <ServiceForm
        type="CREATE"
        schema={serviceSchema}
        defaultValues={emptyService}
        onSubmit={async () => ({ success: true })}
      />
    </div>
  );
};

export default CreatePage;
