const tasks = [];


function dodajz(taskText) {
    const task = {
        id: tasks.length + 1,
        text: taskText,
        completed: false,
    };
    tasks.push(task);
    console.log(`Dodano nowe zadanie: "${taskText}"`);
}


function zad() {
    console.log("Lista zadań:");
    for (const task of tasks) {
        const status = task.completed ? "[x]" : "[ ]";
        console.log(`${status} ${task.id}. ${task.text}`);
    }
}


dodajz("odpoczynek");
dodajz("obiad");
dodajz("drzemka po obiedzie");
zad();
