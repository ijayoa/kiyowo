const Pet = ({name, animal, breed}) => {
    return React.createElement("div",{},[
        React.createElement("h1",{}, name),
        React.createElement("h2",{}, animal),
        React.createElement("h2",{}, breed)
    ]);
}

const App = () => {
    return React.createElement("div",{ id: "something-important"}, [
        React.createElement("h1",{},"Adopt Me!"),
        React.createElement("p",{},"Find your new best friend"),
        React.createElement(Pet,{
            name: "Luna", 
            animal: "Dog", 
            breed: "Maltese"}),
        React.createElement(Pet,{
            name: "Jackpot", 
            animal: "Bird", 
            breed: "Parrot"}),        
        React.createElement(Pet,{
            name: "Samantha", 
            animal: "Cat", 
            breed: "Mixed"})
    ]   
    );
};
ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);