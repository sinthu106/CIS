import axios from 'axios';


// const url="http://palm-api.us-east-2.elasticbeanstalk.com";
const url="http://localhost:5000";

// ------------------accounts APIs request handle here-----------------------
export const getAllFeedbacks = async () => {

    let res = await axios({
        method: 'get',
        url: "http://localhost:8080/feedbacks",
    })

    return res
}

export const getFeedbackById = async (id) => {

    let res = await axios({
        method: 'get',
        url: `http://localhost:8080/feedback/${id}`,
    })

    return res
}

export const sendFeedback = async (data) => {

    let res = await axios({
        method: 'post',
        url: "http://localhost:8080/feedback",
        data: data
    })

    return res
}
