import Container from "~/components/Container";

export default function Home() {
  return (
    <main class="text-gray-800 flex h-screen p-10 gap-10">
      <div class="w-3/12 text-center rounded-sm">
        <Container
          class="w-full h-full bg-white border-violet-500"
          decoratorColor="bg-violet-500"
        >
          <h1 class="font-semibold text-3xl">Control Panel</h1>
        </Container>
      </div>
      <div class="flex flex-1 text-center rounded-sm">
        <Container
          class="w-full h-full bg-white border-blue-500"
          decoratorColor="bg-blue-500"
        >
          <h1 class="font-semibold text-3xl">Social Feed</h1>
        </Container>
      </div>
      <div class="w-2/12 text-center rounded-sm">
        <Container
          class="w-full h-full bg-white border-black"
          decoratorColor="bg-black"
        >
          <h1 class="font-semibold text-3xl">Logs</h1>
        </Container>
      </div>
    </main>
  );
}
