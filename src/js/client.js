const checkStatus = async (response) => {
  try {
    if (!response.ok) {
      const respBody = await response.json();
      const error = new Error('HTTP Error' + response.statuText);
      error.status = response.statusText;
      error.response = response;
      throw error;
    }
    return await response.json();
  } catch (err) {
    throw err;
  }
}

export const getTimers = async (success) => {
  try {
    const response = await fetch('/api/timers', {
      headers: {
        Accept: 'application/json',
      },
    }

    return checkStatus(response);

  } catch(err) {
    console.log(err);
    throw err;
  }
}

export const createTime = async (data) => {
  try {
    const response = await fetch('/api/timers', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }

    return checkStatus(response);

  } catch(err) {
    console.log(err);
    throw err;
  }
}

export const updateTimer = async (data) => {
  try {
    const response = await fetch('/api/timers', {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }

    return checkStatus(response);

  } catch(err) {
    console.log(err);
    throw err;
  }
}

export const deleteTimer = async (data) => {
  try {
    const response = await fetch('/api/timers', {
      method: 'delete',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }

    return checkStatus(response);

  } catch(err) {
    console.log(err);
    throw err;
  }
}

export const startTimer = async (data) => {
  try {
    const response = await fetch('/api/timers/start', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }

    return checkStatus(response);

  } catch(err) {
    console.log(err);
    throw err;
  }
}

export const stopTimer = async (data) => {
  try {
    const response = await fetch('/api/timers/stop', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }

    return checkStatus(response);

  } catch(err) {
    console.log(err);
    throw err;
  }
}
