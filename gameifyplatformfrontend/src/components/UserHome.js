import { useQuery } from "@tanstack/react-query";

export default function UserHome() {
    //const {data, status} = useQuery("userTasks", () => axios.get("/api/user/tasks"));
    let status = "success";
    let data = {tasks: [{taskName: "task1", rewardType: "xp"}]};

    if (status ==="success") {
        return (<div>
            {data.tasks.map((task, index) => {
                return <div key={index}>
                    <h3>{task.taskName}</h3>
                    <p>{task.rewardType}</p>
                </div>
            })}
        </div>);
    }
}