export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return searchParams?.text ? (
    <div>{searchParams?.text}</div>
  ) : (
    <div className="bg-zinc-400 w-11/12 md:w-1/2 lg:w-1/3 h-2/3 md:h-3/4 lg:h-3/4 transition-all rounded-xl font-mono shadow-[#6361858f_6px_5px_1px_0px]">
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
    </div>
  );
}
