

function Button({ text, type }) {
    let buttonStyle = "";
    if (type === "Primary") {
        buttonStyle = "bg-blue-500 px-3 py-2 text-white hover:opacity-50";
    }
    else if (type === "Secondary") {
        buttonStyle = "bg-green-500 px-3 py-2 text-white hover:opacity-50";
    }
    else {
        buttonStyle = "bg-red-500 px-3 py-2 text-white";
    }
    return (
        <button className={`px-3 py-2 rounded ${buttonStyle}`}>{text}</button>
    );

}
export default Button;