const rubrics = (tasks, doneOnly = false) => {
  let result = {
    rubricsAmount: {
      business: 0,
      personal: 0,
    },
    completedAmount: 0,
    donePercent: 0,
  };

  for (let task of tasks) {
    if (task.rubric === "Business") {
      result.rubricsAmount.business++;
    } else {
      result.rubricsAmount.personal++;
    }
    if (task.done) {
      result.completedAmount++;
    }
  }

  result.donePercent =
    Math.round((100 * result.completedAmount) / tasks.length) || 0;

  if (doneOnly) {
    return {
      completedAmount: result.completedAmount,
      donePercent: result.donePercent,
    };
  }

  return result;
};

export const getTasks = (task, num) => {
  return new Promise((resolve, _) => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    resolve(tasks);
  })
    .then((tasks) => {
      if (task !== undefined) {
        task = {
          task: task.task,
          rubric: task.rubric,
          time: task.time,
          notification: task.notification || "",
          place: task.place || "Kiev, Ukraine",
          id: Math.random(),
          done: false,
        };
        tasks.push(task);
      }
      tasks = JSON.stringify(tasks);
      return tasks;
    })
    .then((tasks) => {
      localStorage.setItem("tasks", tasks);
      tasks = JSON.parse(tasks);
      let res = [];
      for (let i = (num - 1) * 4; i <= num * 4 - 1; i++) {
        if (!tasks[i]) break;
        res.push(tasks[i]);
      }

      return {
        tasks: res,
        totalAmount: tasks.length,
        ...rubrics(tasks),
      };
    });
};

export const putTheTask = (id) => {
  return new Promise((resolve, _) => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    resolve(tasks);
  }).then((tasks) => {
    let task;
    tasks = tasks.filter((item) => {
      if (item.id === id) {
        item.done = true;
        task = item;
        return item;
      }
      return item;
    });
    let tasksArr = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksArr);
    return {
      task,
      ...rubrics(tasks, true),
    };
  });
};

export const deleteTaskReq = (id, num) => {
  return new Promise((resolve, _) => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    resolve(tasks);
  }).then((tasks) => {
    tasks = tasks.filter((item) => {
      return item.id !== id;
    });
    tasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasks);
    tasks = JSON.parse(tasks);
    let res = [];
    if ((num - 1) * 4 >= tasks.length) num--;
    for (let i = (num - 1) * 4; i <= num * 4 - 1; i++) {
      if (!tasks[i]) break;
      res.push(tasks[i]);
    }
    return {
      tasks: res,
      totalAmount: tasks.length,
      ...rubrics(tasks),
    };
  });
};
