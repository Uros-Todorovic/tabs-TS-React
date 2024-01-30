import { JobsType } from './App';

type JobInfoProps = {
	jobs: JobsType[];
	setCurrentItem: (jobIndex: number) => void;
	currentItem: number;
};

const BtnConainer = ({ jobs, setCurrentItem, currentItem }: JobInfoProps) => {
	return (
		<div className="btn-container">
			{jobs.map((job, index) => {
				return (
					<button
						key={job.id}
						className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
						onClick={() => setCurrentItem(index)}
					>
						{job.company}
					</button>
				);
			})}
		</div>
	);
};

export default BtnConainer;
