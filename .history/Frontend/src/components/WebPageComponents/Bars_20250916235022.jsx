const Bars=()=>
{
    return (
      <div className="mt-16">
        <div class="w-full h-16 bg-yellow-500  absolute z-10"></div>
        <div class="w-full h-16 bg-green-900 clip-[polygon(0_0,_100%_0,_100%_80%,_0_100%)] origin-top-left relative z-0"></div>
      </div>
    );
}

export default Bars;