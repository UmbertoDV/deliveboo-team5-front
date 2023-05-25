<template>
  <div class="demo">
    <nav class="pagination-outer" aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item">
          <a href="#" class="page-link" aria-label="Previous">
            <span aria-hidden="true">«</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item active"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">5</a></li>
        <li class="page-item">
          <a href="#" class="page-link" aria-label="Next">
            <span aria-hidden="true">»</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.pagination-outer {
  text-align: center;
}
.pagination {
  font-family: "Poppins", sans-serif;
  display: inline-flex;
}
.pagination li {
  margin: 0 5px;
}
.pagination li a.page-link {
  color: #999;
  background: #e7e7e7;
  font-size: 19px;
  font-weight: 500;
  line-height: 37px;
  height: 38px;
  width: 30px;
  padding: 0;
  border: none;
  border-radius: 5px;
  display: block;
  position: relative;
  transition: all 0.3s ease 0s;
}
.pagination li.active a.page-link,
.pagination li a.page-link:hover,
.pagination li.active a.page-link:hover,
.pagination li a.page-link:focus {
  color: #fff;
  background: linear-gradient(#fc6767, #ec008c);
  border: none;
}
.pagination li a.page-link:before {
  content: "";
  background: linear-gradient(to right bottom, #ec008c, #fc6767);
  height: 10px;
  width: 10px;
  border-radius: 2px;
  opacity: 0;
  transform: translateX(-50%) rotate(45deg);
  position: absolute;
  left: 50%;
  top: 4px;
  z-index: -1;
  transition: all 0.3s ease 0s;
}
.pagination li.active a.page-link:before,
.pagination li a.page-link:hover:before,
.pagination li a.page-link:focus:before {
  opacity: 1;
  top: -4px;
}
.pagination li:first-child a.page-link,
.pagination li:last-child a.page-link {
  font-size: 20px;
  line-height: 34px;
  width: 38px;
  border-bottom: 3px solid;
}
.pagination li:first-child a.page-link:hover,
.pagination li:last-child a.page-link:hover {
  color: #fff;
  background: transparent;
  border-bottom-color: #ec008c;
}
.pagination li:first-child a.page-link:focus,
.pagination li:last-child a.page-link:focus {
  color: #999;
  background: #e7e7e7;
}
.pagination li:first-child a.page-link:before,
.pagination li:last-child a.page-link:before {
  top: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
}
.pagination li:first-child a.page-link:hover:before,
.pagination li:last-child a.page-link:hover:before {
  transform: translateX(-50%) translateY(-50%) rotate(45deg) scale(2);
}
.pagination li:first-child a.page-link:focus:before,
.pagination li:last-child a.page-link:focus:before {
  opacity: 0;
}
@media only screen and (max-width: 480px) {
  .pagination {
    font-size: 0;
    display: block;
  }
  .pagination li {
    margin: 5px 0;
    display: inline-block;
  }
}
</style>
