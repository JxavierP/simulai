import Container from "~/components/Container";

export default function Home() {
  return (
    <main class="text-gray-800 flex h-screen p-10 gap-5">
      <div class="w-3/12 text-center rounded-sm">
        <Container
          class="w-full h-full bg-white border-violet-500"
          decoratorColor="bg-violet-500"
        >
          <h1 class="font-semibold text-2xl">S I M U L A I</h1>
        </Container>
      </div>
      <div class="flex flex-1 text-center rounded-sm">
        <Container
          class="w-full h-full bg-white border-blue-500"
          decoratorColor="bg-blue-500"
        >
        </Container>
      </div>
      <div class="w-3/12 text-center rounded-sm">
        <Container
          class="w-full h-full bg-white border-black"
          decoratorColor="bg-black"
        >
        </Container>
      </div>
    </main>
  );
}
