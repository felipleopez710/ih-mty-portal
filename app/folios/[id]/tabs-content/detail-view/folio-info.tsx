import Link from "next/link"
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import dayjs from "dayjs";

export default function FolioInfo({ folioInformation } : any){
    return(
        <div className="w-full bg-white rounded-xl p-5 shadow-md flex flex-col gap-6">
            <div className="section-header flex justify-between items-center">
                <div className="text-base font-semibold">Folio Detail</div>
                <Link href={`/clients/edit/1`}>
                    <div className="flex gap-1 items-center text-ih-blue">
                        <div className='font-medium'>
                            Edit
                        </div>
                        <ModeEditOutlinedIcon fontSize="small" />
                    </div>
                </Link>
            </div>

            <div className='information-lines w-full flex flex-col gap-2'>

                {/* Group code */}
                {
                    folioInformation.group_code !== null ?
                    <div className='information-line w-full flex gap-2'>
                        <div className='w-1/3 text-slate-400'>Group code</div>
                        <div className='w-2/3'>{folioInformation.group_code}</div>
                    </div>
                    :
                    ''
                }

                {/* Client */}
                {
                    folioInformation.client_name !== null ?
                    <div className='information-line w-full flex gap-2'>
                        <div className='w-1/3 text-slate-400'>Client</div>
                        <div className='w-2/3'>{folioInformation.client_name}</div>
                    </div>
                    :
                    ''
                }

                {/* Client location */}
                {
                    folioInformation.client_location !== null ?
                    <div className='information-line w-full flex gap-2'>
                        <div className='w-1/3 text-slate-400'>Client location</div>
                        <div className='w-2/3'>{folioInformation.client_location}</div>
                    </div>
                    :
                    ''
                }

                {/* Modality */}
                {
                    folioInformation.modality !== null ?
                    <div className='information-line w-full flex gap-2'>
                        <div className='w-1/3 text-slate-400'>Modality</div>
                        <div className='w-2/3'>{folioInformation.modality}</div>
                    </div>
                    :
                    ''
                }
            
                {/* Level */}
                {
                    folioInformation.level_description !== null ?
                    <div className='information-line w-full flex gap-2'>
                        <div className='w-1/3 text-slate-400'>Level</div>
                        <div className='w-2/3'>{folioInformation.level_description}</div>
                    </div>
                    :
                    ''
                }

                {/* Material */}
                {
                    folioInformation.material_description !== null ?
                    <div className='information-line w-full flex gap-2'>
                        <div className='w-1/3 text-slate-400'>Material</div>
                        <div className='w-2/3'>{folioInformation.material_description}</div>
                    </div>
                    :
                    ''
                }

                {/* Contracted hours */}
                {
                    folioInformation.contracted_hours !== null ?
                    <div className='information-line w-full flex gap-2'>
                        <div className='w-1/3 text-slate-400'>Contracted hours</div>
                        <div className='w-2/3'>{folioInformation.contracted_hours}</div>
                    </div>
                    :
                    ''
                }

                {/* Start date */}
                {
                    folioInformation.start_date !== null ?
                    <div className='information-line w-full flex gap-2'>
                        <div className='w-1/3 text-slate-400'>Start date</div>
                        <div className='w-2/3'>{dayjs(folioInformation.start_date).format('MMMM D, YYYY')}</div>
                    </div>
                    :
                    ''
                }

                {/* End date */}
                {
                    folioInformation.end_date !== null ?
                    <div className='information-line w-full flex gap-2'>
                        <div className='w-1/3 text-slate-400'>End date</div>
                        <div className='w-2/3'>{dayjs(folioInformation.end_date).format('MMMM D, YYYY')}</div>
                    </div>
                    :
                    ''
                }

                {/* Amount to be invoiced */}
                {
                    folioInformation.amount_to_invoice !== null ?
                    <div className='information-line w-full flex gap-2'>
                        <div className='w-1/3 text-slate-400'>Amount to be invoiced</div>
                        <div className='w-2/3'>${folioInformation.amount_to_invoice}</div>
                    </div>
                    :
                    ''
                }

                {/* Coordinator */}
                {
                    folioInformation.coordinator !== null ?
                    <div className='information-line w-full flex gap-2'>
                        <div className='w-1/3 text-slate-400'>Coordinator</div>
                        <div className='w-2/3'>{folioInformation.coordinator}</div>
                    </div>
                    :
                    ''
                }

                <div className='w-full border my-2'></div>
                <div className='font-semibold mb-2'>Comments</div>

                {/* General comments */}
                {
                    folioInformation.comments !== null ?
                    <div className='information-line w-full flex gap-2'>
                        <div className='w-1/3 text-slate-400'>General comments</div>
                        <div className='w-2/3'>{folioInformation.comments}</div>
                    </div>
                    :
                    ''
                }

                {/* Academic */}
                {
                    folioInformation.academic_comments !== null ?
                    <div className='information-line w-full flex gap-2'>
                        <div className='w-1/3 text-slate-400'>Academic comments</div>
                        <div className='w-2/3'>{folioInformation.academic_comments}</div>
                    </div>
                    :
                    ''
                }

                {/* Material covered */}
                {
                    folioInformation.material_covered !== null ?
                    <div className='information-line w-full flex gap-2'>
                        <div className='w-1/3 text-slate-400'>Material covered</div>
                        <div className='w-2/3'>{folioInformation.material_covered}</div>
                    </div>
                    :
                    ''
                }

            </div>
        </div>
    )
}