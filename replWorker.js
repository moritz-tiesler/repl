importScripts("wasm_exec.js")
const go = new self.Go();

let inst = WebAssembly.instantiateStreaming(fetch("repl.wasm"), go.importObject).then((result) => {

    go.run(result.instance);

});


onmessage = (e) => {
    inst.then((_) => {
        let res = runREPL(e.data);
        postMessage(res);
    })
}