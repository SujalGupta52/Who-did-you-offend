export function Form() {
  return (
    <form action="/" method="get" className="flex flex-col p-8 h-full ">
      <label htmlFor="text" className="font-bold text-xl text-zinc-900">
        Text:
      </label>
      <br />
      <textarea
        name="text"
        id="text"
        className="w-full h-full p-4 bg-zinc-300 outline-none focus-visible:outline-black focus-visible:border-2 rounded-lg"
        maxLength={4096}
      ></textarea>
      <button
        type="submit"
        className="self-center mt-10 bg-zinc-800 h-16 w-2/3 rounded-2xl text-zinc-100 font-semibold text-lg shadow-[#5b5b5b_1px_5px_6px_0px,inset_rgb(212,212,216)_0px_2px_1px_0px] hover:shadow-none hover:pb-1 transition-all ease-linear"
      >
        Submit
      </button>
    </form>
  );
}
