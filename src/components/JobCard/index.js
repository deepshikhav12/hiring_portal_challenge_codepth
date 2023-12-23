import dayjs from "dayjs";

const JobCard = (props) => {
  // const skills=["Javascript","React", "Nodejs"]
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(props.postedOn, "day");
  return (
    <>
    <div className="job-card-1">
      <div className="job-card-2">
        <div className="job-card-3">
          <h1>
            {props.title}- {props.company}
          </h1>
          <p>
            {props.type} - {props.experience} - {props.location}
          </p>
          <div className="job-card-skills">
            {props.skills.map((skill, i) => (
              <p key={i}>{skill}</p>
            ))}
          </div>
        </div>
        <div className="job-card-4">
          <p>
            Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`}{" "}
            ago
          </p>
          <a href={props.job_links}>
            <button>Apply</button>
          </a>
        </div>
      </div>
    </div>
      
      </>

  );
};

export default JobCard;
