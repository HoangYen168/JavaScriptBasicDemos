function ask(question,handleYes,handleNo)
{
    const answer = confirm(question);
    if (answer)
        handleYes();
    else handleNo();
}
//normal

// use arrowFunction
ask(
    "Bạn muốn tiếp tục không?",
    () => console.log("bạn chọn Yes"),
    () => console.log("bạn chọn No"),
    )

