const Bars=()=>
{
    return (
      <div className="mt-16">
        <div class="w-full h-16 bg-yellow-500 rotate-[2deg] absolute z-10"></div>
        <div class="w-full h-16 bg-green-900 rotate-[-2deg] origin-top-left relative z-0"></div>
      </div>
    );
}

export default Bars;