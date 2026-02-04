import { useState } from 'react';
import { ArrowUpNarrowWide, ArrowDownWideNarrow } from 'lucide-react';
import CustomSelect from '../customSelect/CustomSelect';
import { filterType, limit, sortByType, sortType } from '@/features/home/types';
import { useSearchParams } from 'react-router-dom';




export default function FilterComponent() {

    const [sortBy, setSortBy] = useState<sortByType>("name");
    const [sortOrder, setSortOrder] = useState<sortType>("asc");
    const [filterBy, setFilterBy] = useState<filterType>("all");
    const [itemsPerPage, setItemsPerPage] = useState<limit>(6);
    const [searchParams, setSearchParams] = useSearchParams();


    const sortByOptions = [{
        label: "Name",
        value: "name"
    }, {
        label: "Rating",
        value: "rating"
    }, {
        label: "Cook Time",
        value: "cookTime"
    }, {
        label: "Servings",
        value: "servings"
    }];
    const filterByOptions = [{
        label: "All Dishes",
        value: "all"
    }, {
        label: "Quick (≤30 min)",
        value: "quick"
    }, {
        label: "Medium (31-60 min)",
        value: "medium"
    }, {
        label: "Long (>60 min)",
        value: "long"
    }, {
        label: "High Rated (4.5+)",
        value: "high-rated"
    }];
    const itemsPerPageOptions = [{
        label: "6",
        value: 6
    }, {
        label: "9",
        value: 9
    }, {
        label: "12",
        value: 12
    }];



    const handleChangeSortBy = (value: sortByType) => {
        setSortBy(value);
        searchParams.set('sortBy', value);
        setSearchParams(searchParams);
    };


    const handleChangeSortOrder = (value: sortType) => {
        setSortOrder(value);
        searchParams.set('sort', value);
        setSearchParams(searchParams);
    };

    const handleChangeFilterBy = (value: filterType) => {
        setFilterBy(value);
        searchParams.set('filter', value);
        setSearchParams(searchParams);
    };

    const handleChangeItemsPerPage = (value: limit) => {
        setItemsPerPage(value);
        searchParams.set('limit', value.toString());
        setSearchParams(searchParams);
    };




    return (
        <div className="flex flex-col gap-6">
            {/* Top Bar: Sort & Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">

                {/* Sort Controls */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <span className="text-sm font-semibold text-gray-500 whitespace-nowrap hidden sm:inline-block">Sort by:</span>
                    <CustomSelect
                        id="sort-by"
                        label=""
                        value={sortBy}
                        onChange={(e) => handleChangeSortBy(e.target.value as sortByType)}
                        options={sortByOptions}
                    />
                    <button
                        onClick={() => handleChangeSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                        className="flex items-center justify-center p-2 text-gray-500 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 hover:text-orange-500 transition-colors"
                        title={sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                    >
                        {sortOrder === 'asc' ? (
                            <ArrowUpNarrowWide className="w-5 h-5" />
                        ) : (
                            <ArrowDownWideNarrow className="w-5 h-5" />
                        )}
                    </button>
                </div>

                {/* Show Items Count */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <span className="text-sm font-semibold text-gray-500 whitespace-nowrap hidden sm:inline-block">Show:</span>
                    <CustomSelect
                        id="show-per-page"
                        label=""
                        value={itemsPerPage}
                        onChange={(e) => handleChangeItemsPerPage(parseInt(e.target.value, 10) as limit)}
                        options={itemsPerPageOptions}
                    />
                </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
                {filterByOptions.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => handleChangeFilterBy(option.value as filterType)}
                        className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 ${filterBy === option.value
                            ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 transform scale-105'
                            : 'bg-white text-gray-600 shadow-sm hover:bg-gray-50 hover:shadow border border-gray-200 hover:border-orange-200'
                            }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

