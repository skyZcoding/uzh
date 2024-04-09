import Job from "./Job";
import Tag from "./Tag";

export default interface JobState {
  tags: Tag[];
  jobs: Job[];
}