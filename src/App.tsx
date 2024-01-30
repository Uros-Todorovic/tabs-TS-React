import { useEffect, useState } from 'react';
import JobInfo from './JobInfo.tsx';
import BtnConainer from './BtnConainer.tsx';

const url = 'https://course-api.com/react-tabs-project';

export type JobsType = {
	id: string;
	order: number;
	title: string;
	dates: string;
	duties: string[];
	company: string;
};

const App = () => {
	const [isLoading, seIsLoading] = useState(true);
	const [jobs, setJobs] = useState<Array<JobsType>>([]);
	const [currentItem, setCurrentItem] = useState(0);

	const fetchJobs = async () => {
		const response = await fetch(url);
		const newJobs = await response.json();
		setJobs(newJobs);
		seIsLoading(false);
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	if (isLoading) {
		return (
			<section className="jobs-center">
				<div className="loading"></div>
			</section>
		);
	}
	return (
		<section className="jobs-center">
			<BtnConainer jobs={jobs} setCurrentItem={setCurrentItem} currentItem={currentItem} />
			<JobInfo jobs={jobs} currentItem={currentItem} />
		</section>
	);
};
export default App;
