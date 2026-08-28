const HEALTH_ENDPOINT = "https://jsonplaceholder.typicode.com/todos/1";

type HealthResponse = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function fetchHealthData(): Promise<HealthResponse> {
  const response = await fetch(HEALTH_ENDPOINT, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Health endpoint returned ${response.status}`);
  }

  return (await response.json()) as HealthResponse;
}

export default async function HealthPage() {
  let data: HealthResponse | null = null;

  try {
    data = await fetchHealthData();
  } catch {
    return (
      <div className="w-full">
        <p className="mb-3 text-sm font-medium text-zinc-500">System</p>
        <h1 className="text-3xl font-semibold tracking-tight">Health Check</h1>
        <section className="mt-8 max-w-xl rounded-md border border-red-200 bg-red-50 p-6" aria-labelledby="health-error">
          <h2 id="health-error" className="text-xl font-semibold text-red-950">Health check unavailable</h2>
          <p className="mt-2 text-red-800">
            The health endpoint could not be reached. Please try again later.
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full">
      <p className="mb-3 text-sm font-medium text-zinc-500">System</p>
      <h1 className="text-3xl font-semibold tracking-tight">Health Check</h1>
      <section className="mt-8 max-w-xl rounded-md border border-zinc-200 bg-white p-6 shadow-sm" aria-labelledby="health-status">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 pb-4">
          <h2 id="health-status" className="text-xl font-semibold">Service status</h2>
          <span className="rounded-sm bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
            Healthy
          </span>
        </div>
        <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-zinc-500">Endpoint</dt>
            <dd className="mt-1 break-all font-mono text-zinc-900">{HEALTH_ENDPOINT}</dd>
          </div>
          <div>
            <dt className="text-zinc-500">Response ID</dt>
            <dd className="mt-1 text-zinc-900">{data.id}</dd>
          </div>
          <div>
            <dt className="text-zinc-500">User ID</dt>
            <dd className="mt-1 text-zinc-900">{data.userId}</dd>
          </div>
          <div>
            <dt className="text-zinc-500">Completed</dt>
            <dd className="mt-1 text-zinc-900">{data.completed ? "Yes" : "No"}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-zinc-500">Fetched title</dt>
            <dd className="mt-1 text-zinc-900">{data.title}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}