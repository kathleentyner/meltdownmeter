import { Route, Routes, Outlet } from "react-router-dom"
import { ReactionForm } from "../Forms/Reaction"
import { EditReaction } from "../Forms/EditReaction"
import { ReactionList } from "../DailyReport/AllDays"
import '@fontsource/roboto/500.css'

export const ApplicationViews = () => {
	return ( 
	<Routes>
		<Route path="/" element={
<>

	<h1> How Was Hoagie's Day?</h1>
	<h2>Record Hoagie's Big Feelings to Better Support His Wellbeing</h2>
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