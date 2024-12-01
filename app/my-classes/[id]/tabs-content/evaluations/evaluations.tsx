'use client'

import { createClient } from "@/utils/supabase/client"
import { useState, useEffect } from "react"
import EvaluationsTable from "./evaluations-table"

export default function CourseEvaluations({activeFolioId}:any){
    const supabase = createClient()

    const [folioGrades, setFolioGrades]:any = useState(undefined)

    async function getGrades () {
        const { data: grades, error: gradesError } = await supabase.
        from('grades')
        .select('*, students(student_id, full_name)')
        .eq('folio_id', activeFolioId)

        if(grades){
            let formattedGrades:any = []
            grades.map((grade:any)=>{
                formattedGrades.push({
                    id: grade.student_id,
                    student: grade.students?.full_name,
                    module_reading: grade.module_reading,
                    module_listening: grade.module_listening,
                    module_writing: grade.module_writing,
                    module_speaking: grade.module_speaking,
                    final_exam: grade.final_exam,
                    average: grade.average,
                    strength: grade.strength,
                    area_of_opportunity: grade.area_of_opportunity,
                    level_reading: grade.level_reading,
                    level_listening: grade.level_listening,
                    level_writing: grade.level_writing,
                    level_speaking: grade.level_speaking,
                })
            })
            console.log('Grades for this folio: ', formattedGrades)
            setFolioGrades(formattedGrades)
        }
    }

    useEffect(() => {
        if(folioGrades == undefined){
            getGrades()
        }
    }, [])

    return(
        <div className="w-full">
            {
                folioGrades !== undefined && <EvaluationsTable folioGrades={folioGrades} />
            }
        </div>
    )
}