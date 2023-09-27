import React from 'react'

const About = () => {
    return (
        <div className='container'>
            <h2>Introduction</h2>

            <pre>{'-->TaskMaster is a versatile and user-friendly todo web application designed to help you organize your tasks efficiently. \n-->With a sleek and intuitive interface, TaskMaster offers a range of features, including adding, editing, deleting tasks,\n and a powerful search bar, making it your go-to tool for staying organized and productive.'}</pre>

            <h3>Key Features:</h3>

            <h5>1.Add Tasks:</h5>

            <pre>{'-->Easily add new tasks to your todo list by clicking the "Add Task" button.\n-->Provide a task title, description for comprehensive task management.'}</pre>

            <h5>2.Edit Tasks:</h5>

            <pre>{'-->Made a mistake or need to update a task? \n-->No problem!Click on the task you want to edit, and you can modify its title, description.'}</pre>

            <h5>3.Delete Tasks:</h5>

            <pre>{`-->Completed a task or decided it's no longer necessary?\n-->TaskMaster makes it simple to remove tasks.\n-->Just select the task and click the "Delete" button to remove it from your list.`}</pre>

            <h5>4.Search Bar:</h5>

            <pre>{'-->The powerful search bar helps you find tasks quickly and efficiently.\n-->Type in keywords, due dates, or priority levels, and TaskMaster will display matching tasks in real-time.'}</pre>
        </div>
    )
}

export default About
