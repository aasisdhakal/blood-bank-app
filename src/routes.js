import About from "@/components/About";
import DonorsList from "@/components/donors/index";
import CreateDonor from '@/components/donors/create'
import EditDonor from '@/components/donors/edit'

export default [

    {
        path: '/',
        name: 'about',
        component: About,
    },
    {
        path: '/donors',
        name: 'donors',
        component: DonorsList,
    },
    {
        name: 'add_donor',
        path: '/donor',
        component: CreateDonor,
    },
    {
        name: 'edit_donor',
        path: '/donor/:id',
        component: EditDonor,
    }

]
