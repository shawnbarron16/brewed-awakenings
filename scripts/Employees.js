import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const employeeClicked = clickEvent.target
        if(employeeClicked.id.startsWith("employee")) {
            const [,employeeId] = employeeClicked.id.split("--")
            const matchingOrders = []

            for(const employee of employees) {
                if(employee.id === parseInt(employeeId)) {
                    for(const order of orders) {
                        if(employee.id === order.employeeId) {
                            matchingOrders.push(order)
                        }
                    }
                    window.alert(`${employee.name} has sold ${matchingOrders.length} products`)
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

