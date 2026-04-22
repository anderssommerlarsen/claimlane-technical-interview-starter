import { useBackendTest } from "./hooks";

function App() {
  const { data, loading, error } = useBackendTest();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <p>{data?.message}</p>
    </>
  );
}

export default App;
