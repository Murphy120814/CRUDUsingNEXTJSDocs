import DashboardSkeleton from '@/app/ui/skeletons';
export default function Loading() {
  return (
    <p className="text-lg font-medium text-gray-600">
      <DashboardSkeleton />
    </p>
  );
}
