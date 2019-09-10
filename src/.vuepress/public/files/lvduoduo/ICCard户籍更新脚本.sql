ICCard户籍更新脚本  

update [fenhaola].[dbo].[ICCards]  set Family_Id=(select top 1 Family_Id from [fenhaola].[dbo].AspNetUsers b where b.Id=[fenhaola].[dbo].[ICCards].User_Id) where Family_Id is null 