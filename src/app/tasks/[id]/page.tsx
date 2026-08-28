export default async function TaskDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="w-full">
      <p className="mb-3 text-sm font-medium text-zinc-500">Task details</p>
      <h1 className="text-3xl font-semibold tracking-tight">Task {id}</h1>
      <p className="mt-3 max-w-xl text-zinc-600">
        Details for this task will appear here.
      </p>
    </div>
  );
}