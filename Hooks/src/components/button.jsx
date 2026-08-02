

function Button({ text, type,sizes,Onclick}) {
    //let buttonStyle = "";
    const baseStyle = "px-3 py-3 rounded"

    const styling ={
        primary : "bg-blue-500 opacity-80 text-white",
        secondary: "bg-green-500 opacity-80 text-white",
        sussess: "bg-red-500 opacity-80 text-white",
        warning: "bg-cyan-500 opacity-80 text-white"
    }
    const size ={
        small : "px-2 py-1 w-20px",
        medium : "px-3 py-2 w-30px",
        large : "px-4 py-3 w-40px"
    }
    // if (type === "Primary") {
    //     buttonStyle = "bg-blue-500 px-3 py-2 text-white hover:opacity-50";
    // }
    // else if (type === "Secondary") {
    //     buttonStyle = "bg-green-500 px-3 py-2 text-white hover:opacity-50";
    // }
    // else if (type === "Danger") {
    //         buttonStyle = "bg-red-500 px-3 py-2 text-white hover:opacity-50";
    // }
    // else {
    //     buttonStyle = "bg-cyan-500 px-3 py-2 text-white";
    // }
    return (
        <button className={`${baseStyle} ${styling[type]} ${size[sizes]}`} onClick={Onclick}>{text}</button>
    );

}
export default Button;