const ChickenModule = (() => {
    // private prop
    const eggColor = "white";

    // private method 
    const kudaxKudax = () => console.log("Kudax kudax");

    return {
        eggInterface: () => {
            console.log('[eggColor]', eggColor);
            kudaxKudax();
        }
    }
})();



console.log('[ChickenModule]', ChickenModule);

ChickenModule.eggInterface();