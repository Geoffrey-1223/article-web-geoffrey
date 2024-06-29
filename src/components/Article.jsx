import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
// import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import ArticleDetail from './ArticlesDetail';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';

import Navbar from './Navbar';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TextField from "@mui/material/TextField";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import '../css/Article.css';
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


export default function CustomPaginationActionsTable() {

  const [articles, setArticles] = useState([]);
  const [articleDetailOpen, setArticleDetailOpen] = useState(false);
  const [articleDetail, setArticleDetail] = useState(null);
  const [keyword, setKeywordText] = useState('');
  const [fromDateValue, setFromDateValue] = useState(null); // Initialize as null or undefined
  const [toDateValue, setToDateValue] = useState(null);
  const [sourceInputText, setSourceInputText] = useState('');

  const fetchArticles = useCallback(async () => {
    const fromDateQuery = fromDateValue ? `&from=${format(new Date(fromDateValue), 'yyyy-MM-dd')}` : '';
    const toDateQuery = toDateValue ? `&to=${format(new Date(toDateValue), 'yyyy-MM-dd')}` : '';
    const keywordQuery = keyword ? `q=${keyword}` : 'q=';
    const sourceInputTextQuery = sourceInputText ? `sources=${sourceInputText}` : '';

    const apiKey1 = '86957935b7a24e89b16c493296865254';
    const apiKey2 = '30145da60b4245af86d149b9fe2bd604';
    let apiKey = apiKey1;

    try {
      let response;

      try {
        // First attempt with the first API key
        response = await axios.get(
          `https://newsapi.org/v2/everything?${keywordQuery}${fromDateQuery}${toDateQuery}${sourceInputTextQuery}&sortBy=popularity&apiKey=${apiKey}`
        );
      } catch (error) {
        // If the first attempt fails and the error is rate limited, retry with the second API key
        if (error.response && error.response.data.status === 'error' && error.response.data.code === 'rateLimited') {
          apiKey = apiKey2;
          response = await axios.get(
            `https://newsapi.org/v2/everything?${keywordQuery}${fromDateQuery}${toDateQuery}${sourceInputTextQuery}&sortBy=popularity&apiKey=${apiKey}`
          );
        } else {
          // If the error is not rate limited, throw the error
          throw error;
        }
      }

      // Filter articles that have content and image
      const filterRemovedArticle = response.data.status === 'ok'
        ? response.data.articles.filter(e => e.title !== '[Removed]' && e.urlToImage)
        : response.data.articles;

      setArticles(filterRemovedArticle);
    } catch (error) {
      console.error('Error fetching the news articles:', error);
    }
  }, [keyword, fromDateValue, toDateValue, sourceInputText]);


  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setKeywordText(lowerCase);
  };

  let inputSourceHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSourceInputText(lowerCase);
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

// Calculate the date one month before the current date
const oneMonthBefore = dayjs().subtract(1, 'month');
const today = dayjs();

// Disable dates before one month from now
const shouldDisableDateFrom = (date) => date.isBefore(oneMonthBefore, 'day')|| date.isAfter(today, 'day');

  // Disable dates before the selected "Publish Date From" for the "Publish Date To" DatePicker
  const shouldDisableDateTo = (date) => {
    if (fromDateValue) {
      return date.isBefore(fromDateValue, 'day') || date.isAfter(today, 'day');
    }
    return date.isAfter(today, 'day');
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
    <Navbar 
      articleDetailPage={articleDetailOpen}
      isArticleListPage
    />

    <ArticleDetail 
      isOpen={articleDetailOpen}
      articleData={articleDetail}
      onClose={() => setArticleDetailOpen(false)}
    />
    <section id="home" className="container article-container">
			<div className="container">
        <div className="row">
					<div className="col-md-12 text-center">
						<div className="header-text">
							<h2>  Search All Articles</h2>
						</div>
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col-sm-6 col-3 form-item">
                <TextField
                  id="outlined-helperText"
                  className="custom-textfield"
                  onChange={inputHandler}
                  size="medium"
                  label="Keyword"
                />
              </div>
              <div class="col-sm-6 col-3 form-item">
                <TextField
                    id="outlined-helperText"
                    defaultValue=""
                    className="custom-textfield"
                    onChange={inputSourceHandler}
                    size="medium"
                    label="Source Search"
                  />
              </div>
              <div className="col-md-6 col-3 mt-2 form-item">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker', 'DatePicker']}>
                    <DatePicker
                      label="Publish Date From"
                      value={fromDateValue}
                      onChange={(fromDateValue) => setFromDateValue(fromDateValue)}
                      className="custom-textfield"
                      shouldDisableDate={shouldDisableDateFrom}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div class="col-md-6 col-3 mt-2 form-item">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                      <DatePicker
                        label="Publish Date To"
                        value={toDateValue}
                        onChange={(toDateValue) => setToDateValue(toDateValue)}
                        className="custom-textfield"
                        shouldDisableDate={shouldDisableDateTo}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
              </div>

            </div>
					</div>
				</div>
			</div>



		</section>

    {articles.length > 0 ? (
      
      <div className="table-contain">
      <TableContainer component={Paper}>
        <Table  aria-label="custom pagination table">
          <TableHead>
              <TableRow>
                  <TableCell align="center" colSpan={5}>
                      Title
                  </TableCell>
                  <TableCell align="center" colSpan={3}>
                      Author
                  </TableCell>
                  <TableCell align="center" colSpan={3}>
                      Published Date
                  </TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
          {(rowsPerPage > 0
              ? articles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : articles
            ).map((row) => (
              <TableRow key={row.id}>
                <TableCell  colSpan={3} component="th" scope="row" >
                  <button 
                  type="button"
                  className='article-button'
                  onClick={() => {
                      setArticleDetailOpen(true);
                      setArticleDetail(row);
                    }}
                  >
                    {row.title}
                  </button>
                </TableCell>
                <TableCell   colSpan={3} align="right">
                  {row.author}
                </TableCell>
                <TableCell   colSpan={3} align="right">
                  {format(new Date(row.publishedAt), 'yyyy-MM-dd')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 10, 10, { label: 'All', value: -1 }]}
                colSpan={3}
                count={articles.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
  
      </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="header-text">
                <h3>-----------------------No article found, Please set the required search criteria. -----------------------</h3>
              </div>
            </div>
          </div>
        </div>
      )}





    </>
  );
}
