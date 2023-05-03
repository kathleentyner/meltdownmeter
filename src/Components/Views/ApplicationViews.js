import { Route, Routes, Outlet } from "react-router-dom"
import { ReactionForm } from "../Forms/Reaction"
import { EditReaction } from "../Forms/EditReaction"
import { ReactionList } from "../DailyReport/AllDays"
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
	<Route path="reaction/:reactionId/edit" element={ <EditReaction/> } />
	<Route path="history" element={<ReactionList/>} />
		</Route>
	</Routes>
	)
}