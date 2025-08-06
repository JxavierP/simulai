import Container from "~/components/Container";

export default function Home() {
  return (
    <main class="text-gray-800 flex h-screen">
      <div class="w-3/12 text-center rounded-sm py-6 px-10">Lmfao</div>
      <div class="flex flex-1 rounded-sm py-6 px-10">
        <Container
          class="w-full h-full bg-white border-blue-500"
          decoratorColor="bg-blue-500"
        >
          Heya
        </Container>
      </div>
      <div class="w-2/12 text-center rounded-sm py-6 px-10">Welcome</div>
    </main>
  );
}
