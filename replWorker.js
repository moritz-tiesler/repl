importScripts("wasm_exec.js")
const go = new self.Go();

WebAssembly.instantiateStreaming(fetch("repl.wasm"), go.importObject).then((result) => {

    go.run(result.instance);

});


onmessage = (e) => {
    let res = runREPL(e.data);
    postMessage(res);
}