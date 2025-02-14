function unlockNotion() {
    let code = prompt("Enter Activation Code:");
    if (code === "LOTR@linge") {
        document.getElementById("notionMessage").innerHTML = '<a href="https://www.notion.so/your-notion-link">Access Granted</a>';
    } else {
        document.getElementById("notionMessage").innerHTML = "Access Denied!";
    }
}
