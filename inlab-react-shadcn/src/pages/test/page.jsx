import React, {
    ReactChild,
    ReactFragment,
    RefObject,
    useMemo,
    useState,
} from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

const formats = [
    "font",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "align",
    "color",
    "background",
    "size",
    "h1",
];

const TestPage = () => {
    const [values, setValues] = useState();

    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    [{ size: ["small", false, "large", "huge"] }],
                    [{ align: [] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [
                        {
                            color: [],
                        },
                        { background: [] },
                    ],
                ],
            },
        };
    }, []);
    return (
        <div id="testPage">
            <ReactQuill
                className="w-[640px] h-[480px]"
                theme="snow"
                modules={modules}
                formats={formats}
                onChange={setValues}
            />
        </div>
    );
};

export default TestPage;
