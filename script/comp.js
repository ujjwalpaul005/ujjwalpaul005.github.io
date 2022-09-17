let navbar = () =>{
    return`
        <div id="menu">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>

        <div id="icon">
            <a href="#"><img src="./Image/Icon.png"></a>
        </div>

        <div id="link">
            <a href="#about"><span>01. </span>About</a>
            <a href="#project"><span>02. </span>Projects</a>
            <a href="../game"><span>03. </span>Games</a>
            <a href="#contact"><span>04. </span>Contact</a>
        </div>
        <button>Resume</button>
    `
}

let footer = () =>{
    return`
    <p>Created from scratch with <img src="./Image/heart.png"></p>
    <p>© Copyright 2022</p>
    <p>All Right Reserved</p>
    `
}

export {navbar, footer};