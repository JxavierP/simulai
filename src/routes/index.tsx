import { Title } from "@solidjs/meta";
import Container from "~/components/Container";
import Post from "~/components/Post";

export default function Home() {
  return (
    <>
      <Title>Simulai - Home</Title>
      <main class="text-gray-800 flex h-screen p-10 gap-5">
        <div class="w-3/12 text-center rounded-sm">
          <Container
            class="w-full h-full bg-white border-violet-500"
            innerClass="px-3"
            decoratorColor="bg-violet-500"
          >
            <h1 class="font-semibold text-2xl">S I M U L A I</h1>
          </Container>
        </div>
        <div class="flex flex-1 rounded-sm">
          <Container
            class="w-full h-full bg-white border-blue-500"
            innerClass="pl-5 pr-3 space-y-3 overflow-scroll"
            decoratorColor="bg-blue-500"
          >
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </Container>
        </div>
        <div class="w-3/12 text-center rounded-sm">
          <Container
            class="w-full h-full bg-white border-black"
            innerClass="px-3"
            decoratorColor="bg-black"
          ></Container>
        </div>
      </main>
    </>
  );
}
