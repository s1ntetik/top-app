import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';
import cn from 'classnames'

export const Ptag = ({ size = 'm', children, className, ...props }: PtagProps): JSX.Element => {
	return (
		<p className={cn(styles.p, className, {
			[styles.large]: size === 'l',
			[styles.middle]: size === 'm',
			[styles.small]: size === 's'
		})}
			{...props}
		>
			{children}
		</p>
	)
};