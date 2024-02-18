const swaggerAutogen = require("swagger-autogen")({ language: "ko" });

const doc = {
    info: {
        title: "inLab API",
        description: "연구실 안의 모든 일",
    },
    host: "localhost:80",
    schemes: ["http"],
    // schemes: ["https" ,"http"],
};

const outputFile = "./swagger-output.json"; // 같은 위치에 swagger-output.json을 만든다.
const endpointsFiles = [
    "../app.js", // 라우터가 명시된 곳을 지정해준다.
];

swaggerAutogen(outputFile, endpointsFiles, doc);
