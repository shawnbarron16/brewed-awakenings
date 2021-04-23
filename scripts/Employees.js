import { getEmployees } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const employeeClicked = clickEvent.target
        if(employeeClicked.id.startsWith("employee")) {
            const [,employeeId] = employeeClicked.id.split("--")

            for(const employee of employees) {
                if(employee.id === parseInt(employeeId)) {
                    window.alert(`${employee.name} has sold x number of products`)
                }
            }
        }
    }
)

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

