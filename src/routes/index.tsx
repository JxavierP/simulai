export default function Home() {
  return (
    <main class="text-gray-800 flex h-screen">
      <div class="w-2/12 text-center rounded-sm py-6 px-10">Welcome</div>
      <div class="flex flex-1 rounded-sm py-6 px-10">
        <div class="w-full h-full border border-blue-400 relative p-3 bg-white">
          <p>Heya</p>
          <div
            id="box-decorator"
            class="absolute w-2 h-2 top-0 left-0 -translate-1/2 bg-blue-400"
          />
          <div
            id="box-decorator"
            class="absolute w-2 h-2 bottom-0 left-0 -translate-x-1/2 translate-y-1/2  bg-blue-400"
          />
          <div
            id="box-decorator"
            class="absolute w-2 h-2 top-0 right-0 translate-1/2 -translate-y-1/2 bg-blue-400"
          />
          <div
            id="box-decorator"
            class="absolute w-2 h-2 bottom-0 right-0 translate-x-1/2 translate-y-1/2 bg-blue-400"
          />
        </div>
      </div>
      <div class="w-2/12 text-center rounded-sm py-6 px-10">Welcome</div>
    </main>
  );
}
