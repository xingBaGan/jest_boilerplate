import sleep from "../src/utils/sleep";
test('test',async ()=>{
   let time = Date.now();
    await sleep(1000);
    let endTime = Date.now();
    expect((endTime-time)>=1000).toEqual(true)
})