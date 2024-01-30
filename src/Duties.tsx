import { FaAngleDoubleRight } from 'react-icons/fa';

type DutiesProps = {
	duties: string[];
};

const Duties = ({ duties }: DutiesProps) => {
	return (
		<div>
			{duties.map((duty) => {
				const ID = performance.now().toString(36) + Math.random().toString(36).substring(2);
				return (
					<div key={ID} className="job-desc">
						<FaAngleDoubleRight className="job-icon" />
						<p>{duty}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Duties;
