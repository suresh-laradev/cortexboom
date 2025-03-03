export default function Layout({
  children,
  completed,
  pending,
}: {
  children: React.ReactNode;
  completed: React.ReactNode;
  pending: React.ReactNode;
}) {
  return (
    <>
      {children}
      <section className={"flex flex-wrap gap-4 py-4"}>
        {completed}
        {pending}
      </section>
    </>
  );
}
