interface AuthCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  // role: "client" | "vendor" | "admin";
  // createdAt: Date;
}

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
  role: "client" | "vendor" | "admin";
  createdAt: Date | null;
}

interface BookingModalProps {
  serviceName: string;
  serviceImage?: string;
  servicePrice: number;
  serviceLocation?: string;
  serviceType: string;
  children: React.ReactNode;
  onBookingComplete?: (bookingData: BookingData) => void;
}

interface BookingData {
  serviceId: string;
  date: Date | undefined;
  timeSlot: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  specialRequests: string;
  paymentMethod: string;
}

interface Booking {
  id: string;
  artist: string;
  date: string;
  time: string;
  location: string;
  price: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  image: string;
}

