--查询所有视图名
select view_name from user_views;

--根据用户查询所有视图
select * from all_views where all_views.owner = 'SUPERVISE'