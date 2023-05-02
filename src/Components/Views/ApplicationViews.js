import { Route, Routes, Outlet } from "react-router-dom"
import { ReactionForm } from "../Forms/Reaction"
import { EndDayForm } from "../Forms/EndDay" 
import { EditReaction } from "../Forms/EditReaction"

export const ApplicationViews = () => {
	return ( 
	<Routes>
		<Route path="/" element={
<>

	<h2> How Was Hoagie's Day?</h2>
	<div>Record Hoagie's Big Feelings to Better Support His Wellbeing</div>
	<Outlet />
	</>
		}>
	<Route path="reaction" element={ <ReactionForm /> } />
	<Route path="endDay" element={ <EndDayForm /> } />
	<Route path="editreaction" element={ <EditReaction/> } />

		</Route>
	</Routes>
	)
}